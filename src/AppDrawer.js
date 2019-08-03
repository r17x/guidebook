import React from 'react';
import { Div, Container } from "atomize";

export default function AppDrawer({children}){
    return (
        <Container>
            <Div>
                {children}
            </Div>
        </Container>
    )
}
