import { A, List, ListItem, Nav } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <Nav>
            <List>
                <ListItem><A to='/' end>Home</A></ListItem>
                <ListItem><A to='/movies'>Movies</A></ListItem>
            </List>
        </Nav>
    )
}