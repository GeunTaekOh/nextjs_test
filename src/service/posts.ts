import { client, urlFor } from './sanity';
import { SimplePost } from 'src/model/post';

const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": count(comments),
  "id":_id,
  "createdAt":_createdAt,
`; //post.author.username 으로 안하고 post.username 으로 할 수 있게 플래트닝 해주는 작업
export async function getFollowingPostsOf(username: string) {
  //join 쿼리
  return client
    .fetch(
      `
    *[_type == "post" && author->username == "${username}"
      || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
      | order(_createdAt desc){${simplePostProjection}}
  `,
    )
    .then((posts) => posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) })));
}
