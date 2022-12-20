import { A, List, ListItem } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <nav>
            <List>
                <ListItem><A to='/' end>Home</A></ListItem>
                <ListItem><A to='/movies'>Movies</A></ListItem>
            </List>
        </nav>
    )
}