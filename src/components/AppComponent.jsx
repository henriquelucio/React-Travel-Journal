import HeaderComponent from "/src/components/HeaderComponent"
import EntryComponent from "/src/components/EntryComponent"
import data from "/src/data.js"

export default function AppComponent(){
    console.log(data)
    const newEntry = data.map((entry) => {
        return (
            <EntryComponent
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })

    return (
        <>
            <HeaderComponent/>
            <main className="container">
                {newEntry}
            </main>
        </>
    )
}