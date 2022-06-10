
import React from 'react';
import Banner from '../Layout/banner';
import Introduce from '../Layout/introduce';
import Teacher from '../Layout/teachers';
import Environment from '../Layout/enviroments';
import ContactForm from '../Layout/contact_form';

export default function Home() {

    return (
        <React.Fragment>
            <Banner></Banner>
            <Introduce></Introduce>
            <Teacher></Teacher>
            <Environment></Environment>
            <ContactForm></ContactForm>
        </React.Fragment>
    );
}