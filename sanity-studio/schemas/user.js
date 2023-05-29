export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    { //id
      title: 'Username', //studio UI 에서 보는 이름
      name: 'username', // data, backend 에서 보는 이름
      type: 'string'
    },
    { //이름
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string'
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [  //array 는 이런 형태이다.
        {
          type: 'reference',
          to: [{ type: 'user' }]
        }
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [  //array 는 이런 형태이다.
        {
          type: 'reference',
          to: [{ type: 'user' }]
        }
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }]
        }
      ],
      validation: (Rule) => Rule.unique(),
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    }
  }
};