import React from 'react';
import { Alert, SafeAreaView, ScrollView, ViewStyle, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, HelperText, IconButton, List, MD3Colors, PaperProvider, Text, TextInput } from 'react-native-paper';
import { RealmProvider } from '@realm/react';
import { Person } from './src/model/Person';
import { isValidIdCardNo } from './src/helper/idcard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [cardNo, setIdCardNo] = React.useState("");

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 10
  };

  const handleAddCard = () => {
    if (!cardNo || !isValidIdCardNo(cardNo)) {
      Alert.alert('错误的身份证号')
      return
    }
  }

  return (
    <RealmProvider schema={[Person]}>
      <PaperProvider>
        <SafeAreaView style={backgroundStyle}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>

            <TextInput
              label="身份证号"
              placeholder='请输入身份证号'
              style={{ marginBottom: 10 }}
              value={cardNo}
              keyboardType="phone-pad"
              onChangeText={text => setIdCardNo(text)}
            />

            <Button style={{ marginTop: 10, }} icon="plus" mode="outlined" onPress={handleAddCard}>
              添加
            </Button>
            <Text variant="titleMedium" style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>已添加的信息</Text>
            <List.Section>
              <List.Item
                right={props =>
                  <IconButton
                    icon="information-outline"
                    iconColor={MD3Colors.secondary50}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />}
                style={{ paddingRight: 0 }}
                contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
                title="First item" />
              <List.Item title="Second item" />
            </List.Section>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </RealmProvider>
  );
}
export default App;
