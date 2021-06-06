import { gql, useQuery } from "@apollo/client";

const Component = ({ data }) => <span>{data.loading ? ".." : data.name}</span>;

const query = gql`
    query name {
        name
    }
`;

export default Component;
