import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import ContactsPage from "../pages/contacts";
import GET_CONTACTS from "../lib/queries/getContacts";

const mockContactsData = {
    request: {
        query: GET_CONTACTS,
        variables: { first: 10, afterCursor: 1 },
    },
    result: {
        data: {
            contacts: {
                totalCount: "20",
                edges: [
                    {
                        cursor: 2,
                        node: {
                            id: 2,
                            firstname: "Timmy",
                            lastname: "Crist",
                            email: "Klocko_Shemar@Murphy.tv",
                            phonenumber: "sdsd",
                            address: "42 Hessel Drives Apt. 994",
                            city: "Otiliabury",
                            postcode: "73092",
                        },
                    },
                    {
                        cursor: 3,
                        node: {
                            id: 3,
                            firstname: "Garnet",
                            lastname: "Dickens",
                            email: "Adele.Kessler@yahoo.com",
                            phonenumber: "454545",
                            address: "7463 Von Divide Apt. 018",
                            city: "East Kristophertown",
                            postcode: "92642",
                        },
                    },
                ],
                pageInfo: {
                    startCursor: 3,
                    hasNextPage: true,
                },
            },
        },
    },
};

describe("contacts page", () => {
    afterEach(cleanup);
    test("loads and displays the contacts page", async () => {
        const { getByText, findByText } = render(
            <MockedProvider addTypename={false} mocks={[mockContactsData]}>
                <ContactsPage />
            </MockedProvider>
        );

        expect(getByText("Loading...")).toBeInTheDocument();
        await new Promise((resolve) => setTimeout(resolve, 0));

        const totalContacts = await findByText("Total contacts 20");
        expect(totalContacts).toBeInTheDocument();
    });
});
