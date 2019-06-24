# Box Office Prediction: A Project

![Header](pic/pic.PNG)

In a world where movies made an estimated $41.7 billion in 2018, the film industry is more popular than ever. But what movies make the most money at the box office? How much does a director matter? Or the budget? Having been following box office as a side hobby for a while, this project was definitely one of my favorites to do. In this project, I practiced data cleaning, exploratory data analysis, data visualization, feature engineering, building various boosting models (XGBoost, CatBoost), and simple ensemble learning. 

# Data Description
In this dataset, there are 7398 movies and a variety of metadata obtained from The Movie Database [The Movie Database](https://www.themoviedb.org) (TMDB). Movies are labeled with id. Data points include cast, crew, plot keywords, budget, posters, release dates, languages, production companies, and countries. We will predict the worldwide revenue for 4398 movies in the test file. You can download the dataset [here](https://drive.google.com/drive/folders/1jyIZDHzhgJzZYZoDTVeMMqBU0ZdpGb2d?usp=sharing).

# Exploratory Data Analysis
After cleaning data, I performed some analysis. Here I will show a few graphs that will give you better understanding of what is behind the box office world.

## NINE languages in one movie?
As expected, most movies only have 1-2 spoken languages. However, there is one outlier with NINE spoken languages in that movie!

![pic](pic/num_languages.PNG)

## English dominates the film industry. In other news, water is wet.
Well. But what is the second most popular language after English? It's... French.

![pic](pic/language.PNG)

## How many genres can you fit in one movie?

Most movies are listed with two genres. Specifically, there are 3 movies with SEVEN genres! These movies are: "Jimmy Neutron: Boy Genius", "Fishtales", and "Crossroads". I have not seen any of them, but I guess it is worth a try.

![pic](pic/num_genres.PNG)

## Revenue per Year

Film industry is growing like crazy. Apparently, people are making more money from movies than ever. Here is the graph representing revenue per year:

![pic](pic/year.PNG)

Something seemed to happen in 2017... I don't know honestly. Any idea?

## Best month in the year to release movies?

June seems to be the golden month of the year to release movie. Apparently, most blockbusters in our recent memory were released in the summer: Guardians of the Galaxy Vol. 2, Spider-Man: Homecoming, Wonder Woman, etc.

![pic](pic/month.PNG)

## What about best day in the week?

Most movies are released on Monday, Tuesday, and Wednesday. There is a clear downward trend in terms of revenue for movies that were released after Wednesday during the release week. 

![pic](pic/day.PNG)

# Model Building

I am a simple man. If I were to build Machine Learning models for a real life project, I would choose the best, most powerful, most efficient models that are available. That being said, I decided to hop on the XGBoost hype train for the first time. XGBoost stands for Extreme Gradient Boosting. It is THE favorite Machine Learning algorithm of top Kagglers, and sometimes you can even see people winning Kaggle competitions using ONLY XGBoost.

XGBRegressor offers many tuning parameters which can be used to reduce the training time and accuracy significantly. In this project, I implemented XGBoost, added some parameters to my model, then checked for feature importance. I also used the plot_importance function to evaluate the features. Here is the top five:

![pic](pic/features.PNG)

On top of XGBoost, I also built a CatBoost (my second favorite boost model after XGBoost) model, got predictions from both models, and practiced ensemble by simply taking weighted average of the results. You can check [this notebook](https://nbviewer.jupyter.org/github/andreduong/box-office-prediction/blob/master/box-office-prediction.ipynb) for the codes.

# Conclusion
In completing this project, I practiced data wrangling, visualization, learned how to properly implement XGBoost/CatBoost model, and simple ensemble learning to improve performance for the models.
