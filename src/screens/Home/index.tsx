import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "../../components/Product";
import { style } from "./styles";
import { useEffect, useState } from "react";

export function Home() {

  const [value, setValue] = useState("");

  useEffect(() => {
    Alert.alert("Oi", value, [{
      onPress: () => setValue("Eduardo Conte")
    }])
  }, [value]);

  const products: string[] = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Farinha de Trigo",
    "Açúcar",
    "Sal",
    "Óleo de Soja",
    "Leite",
    "Ovos",
    "Pão",
    "Café",
    "Chá",
    "Manteiga",
    "Queijo",
    "Presunto",
    "Frango",
    "Carne Bovina",
    "Peixe",
    "Frutas",
    "Legumes",
    "Verduras",
    "Batata",
    "Cebola",
    "Alho",
    "Tomate",
    "Cenoura",
    "Banana",
    "Maçã",
    "Laranja",
    "Uva",
    "Refrigerante",
    "Suco",
    "Água Mineral",
    "Biscoitos",
    "Cereais",
    "Molho de Tomate",
    "Condimentos",
    "Iogurte",
    "Sorvete",
    "Chocolate"
  ];

  function handleAddProduct() {
    if (products.includes("Arroz")) {
      Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome")
    }
  }

  function handleProductRemove(name: String) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [{
      text: 'Sim',
      onPress: () => Alert.alert("Deletado")
    },
    {
      text: 'Não',
      style: "cancel"
    }
    ])
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de Compras</Text>
      <Text>Quarta-feira, 17 de Julho de 2025</Text>

      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Nome do Produto"
          placeholderTextColor="#BDBABA"
          keyboardType="default"
        />

        <TouchableOpacity style={style.button} onPress={handleAddProduct}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={style.listTitle}>Compras pendentes</Text>

      {/* <Text style={style.listEmpytText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text> */}


      {/* <ScrollView>
         {
        products.map((product) =>  <Product key={product} name={product} onRevome={() => handleProductRemove(product)}/> ) 
        }
      </ScrollView> */}

      <FlatList
        contentContainerStyle={style.list}
        data={products}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Product name={item} onRemove={() => handleProductRemove(item)} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={style.listEmpytText}>
            Comprou todos os produtos? Adicione produtos a sua lista de compras
          </Text>
        )}
        centerContent
      />

    </View>
  )
}

