import { bookApiInstance } from '../bookApi';

/*const getBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookApiInstance.get(`/book`)
  }, []);
};*/

const getBooks = async () => {
  const { data } = await bookApiInstance.get('/book');
  return data.body;
};

export default getBooks;
