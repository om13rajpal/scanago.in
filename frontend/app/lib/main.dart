import 'package:app/login.dart';
import 'package:flutter/material.dart';

void main(){
  runApp(const Scanago());
}

class Scanago extends StatelessWidget{
  const Scanago({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Scanago",
      theme: ThemeData(
        primaryColor: Colors.black,
        visualDensity: VisualDensity.adaptivePlatformDensity
      ),
      home: Login(),
    );
  }

}