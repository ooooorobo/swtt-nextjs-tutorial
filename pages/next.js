import styles from '../styles/Home.module.css'
import Image from "next/image"
import { NextSeo } from 'next-seo'

export default function NextPage({name, meal}) {
    return (
        <div className={styles.container}>
            <NextSeo title={meal.name} description={meal.description.substring(0, 30)} />
            <p>Next Page</p>
            <p>{name}</p>
            <div>
                <p>{meal.name}</p>
                <Image src={meal.imgSrc} width={500} height={500} />
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    const data = await response.json()

    const meal = data.meals[0]

    return {
        props: {
            name: "예진",
            meal: {
                name: meal.strMeal,
                description: meal.strInstructions,
                imgSrc: meal.strMealThumb,
            }
        }
    }
}