export async function CardData(){
    const res = await fetch("https://krds-assignment.github.io/aoc/api-assets/data.json", {
        cache:"no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch Data")
    }

    const data = await res.json();
    return data
}