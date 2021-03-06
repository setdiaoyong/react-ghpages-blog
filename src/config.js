module.exports = {
    title: 'React ghpages blog',
    description: 'React ghpages blog based on GitHub Pages.',
    author: 'zowiegong',
    keywords: 'bolg, web, javascript, react, zowiegong, 博客',

    domain: 'https://zowiegong.com',

    baseURL: 'https://api.github.com',
    requestTimeOut: 20 * 1000,

    comment: true,
    // client_id 从 https://github.com/settings/applications/new 注册获取
    client_id: '8622cc9adc195017b14d',

    owner: 'zowiegong',
    repo: 'blog',
    postsDir: 'posts',
    branch: 'master'
}