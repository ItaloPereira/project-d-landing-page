const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'mustaj',
    name: 'Mustaj',
    email: 'mustaj.dev@gmail.com',
    password: '1234',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442d',
    username: 'talys',
    name: 'Talys',
    email: 'talys@gmail.com',
    password: '1234',
  },
];

const pages = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    theme: 'mustaj',
    primary_color: '#d32f2f',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442e',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442d',
    theme: 'inki',
    primary_color: '#8e24aa',
  },
];

const pageSections = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442c',
    page_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    type: 'header',
    section_order: 1,
  },
];

const pageContents = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    page_id: '410544b2-4001-4271-9855-fec4b6a6442b',
    section_id: '410544b2-4001-4271-9855-fec4b6a6442c',
    type: 'texto',
    data: 'Conteúdo de exemplo',
    content_order: 1,
  },
];

module.exports = { users, pages, pageContents, pageSections };
