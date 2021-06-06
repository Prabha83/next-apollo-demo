import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <div className="title">About</div>
        <br />
        <br />
        <Link href="/">
            <a>Go Back</a>
        </Link>
    </Layout>
);

export default About;
