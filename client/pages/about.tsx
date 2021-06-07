import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <div className="hero-body">
            <div className="container">
                <div className="title">About</div>
                <br />
                <br />
                <Link href="/">
                    <a>Go Back</a>
                </Link>
            </div>
        </div>
    </Layout>
);

export default About;
