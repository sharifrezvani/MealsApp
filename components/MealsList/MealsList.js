import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

import uuid from "react-native-uuid";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />; // the ... spreads the properties out one by one
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        // keyExtractor={(item) => {
        //   item.id;
        // }}
        key={uuid.v4()}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
