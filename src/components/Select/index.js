import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './selection.css';

export default class Selection extends React.Component {
    render (){
        return (
            <Form className="container-selection mt-5 ml-5">
                <FormGroup >
                    <Input type="select" name="selection" className="selection" >
                        <option>-</option>
                        <option>Postres</option>
                        <option>Shots</option>
                        <option>Snaks</option>
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}