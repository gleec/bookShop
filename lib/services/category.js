import { bookApiInstance } from '../bookApi';

/*const getBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookApiInstance.get(`/book`)
  }, []);
};*/

const getCategories = async () => {
  const { data } = await bookApiInstance.get('/category');
  return data.body;
};

export default getCategories;
