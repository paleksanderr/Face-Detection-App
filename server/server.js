import  express  from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => 
req.query
res.send('getting root'));




app.listen(3000, () => console.log('listening on port 300210'));