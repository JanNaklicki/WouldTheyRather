# WouldTheyRather

This project was created for no specific reason. This simple game is based on idea behind game called "Would you rather" but it's reversed. 
## Game basics

Before playing audience have to answer previously created pull of question. Two actual players have to guess percentage of people who chose specyfic answer. The thing that makes this game more intresting is the fact that players are connected to small tens unit. Player that is further away from right answers ratio is geting tazed.
#How to use this project
###### Software part
1. Install [MongoDB](https://www.mongodb.com/)
2. Create collection and edit path to it. 
3. Use [question model](models/question.js) structure to enter questions and answers. 
4. Install arduino code.
5. Run project using node.
###### Hardware
**Parts for project:**
- any cheap tens unit [e.g.](https://pl.aliexpress.com/item/32653898288.html) 
- arduino
- raspberry pi (requiered for mobile version)
- wires
- 2 potentiometers
![image](https://user-images.githubusercontent.com/49452909/117891480-41585780-b2b7-11eb-970e-75427ef0c39d.png)

  
In this project I used relay with only two inputs. Here you can see how to connect cables from orginal tens unit to relay.  

![image](https://user-images.githubusercontent.com/49452909/117893910-972efe80-b2bb-11eb-89c5-85a48cf7edc1.png)
In second photo you can see endings of blue and white cables. These are the parts that are connected to players 
![image](https://user-images.githubusercontent.com/49452909/117894304-5edbf000-b2bc-11eb-98ed-9274d5b4cf71.png)

