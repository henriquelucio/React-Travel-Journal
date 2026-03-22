import HeaderComponent from "/src/components/HeaderComponent"
import EntryComponent from "/src/components/EntryComponent"
import data from "/src/data.js"

export default function AppComponent(){
    const newEntry = data.map((data) => {
        return (
            <EntryComponent
                key={data.id}
                {...data}
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