import React, { Component } from "react";
import { SafeAreaView, TextInput } from "react-native";
import styles from "./index.style";

type SearchBarProps = {
  searchText: string;
  handleSearchTextChange: (value: string) => void;
};

class SearchBar extends Component<SearchBarProps> {
  render() {
    const { searchText, handleSearchTextChange } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={handleSearchTextChange}
          value={searchText}
          placeholder="Search recipes"
        />
      </SafeAreaView>
    );
  }
}

export default SearchBar;
