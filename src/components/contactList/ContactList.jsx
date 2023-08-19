import { ContactItem } from "components/contactItem/ContactItem";

export const ContactList = ({ actual, onDelete }) => {
    return (
        <ul>
            {actual.map(contact => (
                <li key={contact.id}>
                    <ContactItem item={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    );
};
