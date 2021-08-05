import Header from '../components/Header';
import Layout from '../components/Layout';
import ListCategories from '../components/Category/ListCategories';

export default function Home() {
  return (
    <div>
      <Layout>
        <ListCategories />
      </Layout>
    </div>
  );
}
