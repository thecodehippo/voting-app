import db from '../../configuration/postgres'

export default async function createTableHandler(req, res) {

    if (req.method == 'POST') {
        console.log('creating tables');
        const postResponse = await db.query(`CREATE TABLE IF NOT EXISTS attending ( name TEXT NOT NULL );`);
        res.status(200).send(postResponse);
    } else {
        console.log(`${method} not allowed`);
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }

}