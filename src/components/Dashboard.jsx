import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";

export function Dashboard() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Header text="Welcome to Vehicle Rental CRUD app"></Header>
                <p>Using this app you can add user, remove user, search a specific user and update user</p>
            </Container>
        </>

    );
}