import { useLayoutEffect } from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import MealItem from "../components/MealsList/MealItem";
// import { useRoute } from '@react-navigation/native'; could be an alternative

// import uuid from "react-native-uuid";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // we are checking if an item exists by finding it's index
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
