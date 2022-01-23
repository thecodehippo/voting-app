import pool from '../../configuration/postgres'

export default async function namesHandler(req, res) {
  const method = req.method;
  const name = req.body.name;

  switch (method) {
    case 'GET':
      console.log('get names');
      const getResponse = await pool.query(`SELECT * FROM attending;`);
      const names = getResponse.rows[0];
      res.send(names);
      break
    case 'POST':
      console.log('add names');
      const postResponse = await pool.query(`INSERT INTO attending (name) VALUES ('${name}');`);
      res.status(200).send('success');
      break
    case 'DELETE':
      console.log('delete all names');
      const deleteResponse = await pool.query(`DELETE FROM attending WHERE name IS NOT NULL;`);
      res.status(200).send('success');
      break
    default:
      console.log(`${method} not allowed`);
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}