import * as React from 'react'

const ContactsPage = () => {
    return (
        <main>
            <h1>Contacts</h1>

            <ul>
                <li><a href='https://www.linkedin.com/in/riyadh-h/'>LinkedIn</a></li>
                <li><a href='https://github.com/riyadh-h/'>GitHub</a></li>
            </ul>
        </main>
    )
}

export const Head = () => <title>Contacts</title>

export default ContactsPage
