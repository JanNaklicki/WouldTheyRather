# WouldTheyRather

This project was created for no specific reason. This simple game is based on the idea behind the game called "Would you rather" but it's reversed. 
## Game basics

Before playing audience have to answer previously created form with questions. Two actual players have to guess the percentage of people who chose a specific answer. The thing that makes this game more interesting is the fact that players are connected to a small tens unit. The player that is further away from the right answers ratio is getting tazed.  
## How to use this project
###### Software part
1. Install [MongoDB](https://www.mongodb.com/)
2. Create a collection and edit a path to it. 
3. Use [question model](models/question.js) structure to enter questions and answers. 
4. Install Arduino code.
5. Run project using node.
###### Hardware
**Parts for the project:**
- any cheap tens unit [e.g.](https://pl.aliexpress.com/item/32653898288.html) 
- Arduino
- raspberry pi (required  for mobile version)
- wires
- 2 potentiometers
![image](https://user-images.githubusercontent.com/49452909/117891480-41585780-b2b7-11eb-970e-75427ef0c39d.png)

  
In this project, I used a relay with only two inputs. Here you can see how to connect cables from original tens unit to the relay.    

![image](https://user-images.githubusercontent.com/49452909/117893910-972efe80-b2bb-11eb-89c5-85a48cf7edc1.png)
In the second photo you can see endings of blue and white cables. These are the parts that are connected to players 
![image](https://user-images.githubusercontent.com/49452909/117894304-5edbf000-b2bc-11eb-98ed-9274d5b4cf71.png)

## Gameplay
Go to the games directory open console and use node server.js to start the game. If you prepare everything the right way you will be greeted with a server address(127.0.0.1:3000). Copy it and paste it into a web browser. You should see the menu and when you hit play, the game begins. The last thing to do is have fun.
  
*Example gameplay*
![image](https://user-images.githubusercontent.com/49452909/117896726-82556980-b2c1-11eb-9877-b9b316ea2bca.png)
![img2](https://user-images.githubusercontent.com/49452909/118229635-a1542700-b48c-11eb-8df9-12c7249de4a0.jpg)


