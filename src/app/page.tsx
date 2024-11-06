import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileSection from '../components/ProfileSection';

export default function HomePage() {
  return (
    <div>
      <Header />
      <ProfileSection />
      {/* <h1>Welcome to Profolio</h1> */}
      {/* <p>This is the home page where you can find blog posts, projects, and more!</p> */}
      <Footer />
    </div>
  );
}
