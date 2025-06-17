// Objetivo: se utiliza para memorizar una instancia de una funcion
// hace que un hijo no renderice

import { memo, useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenes un numero de telefono al que llamas con frecuencia
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono
// A menos el numero cambie, siempre utilizo el mismo contacto

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void
}

// skippea el re-rendering si las props no cambian (se utiliza cuando lo que se renderiza es muy costoso)
const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`)

    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Telefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Llamar</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([{
        id: 1, name: "Manzana", phone: "4443333"
    },
    {
        id: 2, name: "Pera", phone: "2424244"
    },
    {
        id: 3, name: "Leche", phone: "5542223"
    }
    ]);

    const [log, setLog] = useState<string>('')

    const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), []) // no tiene dependencias porque makeCall no depende de nada, solamente hace un log

    const addContact = () => {
        const newContact = {
            id: contacts.length +1,
            name: `Contacto ${contacts.length + 1}`,
            phone: `${Math.floor(10000000 + Math.random() * 90000000)}`
        }

        setContacts([...contacts, newContact])
    }

    return (
        <div>
            <h2>Agenda de Contacto</h2>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} /> // makeCall no provoca re render en el hijo por el useCallback
            ))}
            <button onClick={addContact}>Agregar Contacto</button>
            <p>{log}</p>
        </div>
    )
}