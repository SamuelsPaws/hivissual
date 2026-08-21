import Cloudflare from 'cloudflare';

const client = new Cloudflare({
    apiToken: process.env.CLOUDFLARE_API_TOKEN!, // This is the default and can be omitted
});

const zone = await client.zones.create({
    account: { id: '0fee5e97019c22302a68e6218bef4d7d' },
    name: 'https://0fee5e97019c22302a68e6218bef4d7d.r2.cloudflarestorage.com',
    type: 'full',
});

console.log(zone.id);