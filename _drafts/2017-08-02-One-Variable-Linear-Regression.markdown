---
layout: post
title:  "Linear Regression With Single Variable"
date:   2017-08-02 
jsarr:
- graphs/plot.js
categories: Machine Learning Linear Regression
---

Introduction
------------



In this blog post I will be discussing about univarite linear regression as used in Machine Learning.
But lets first discuss what exactly is Machine Learning

What is Machine Learning?
=========================

The term *Machine Learning* was coined by [Arthur Samuel](https://en.wikipedia.org/wiki/Arthur_Samuel) in 1959 as:

>>"The field of study that gives computer the ability to learn without being
explicitly programmed"

More precise defination is given by [Tom Mitchell](http://www.cs.cmu.edu/~tom/):
>> "A computer program is said to learn for __experience E__ with respect to some calss of __tasks T__ and __performance measure P__, if it's performance at tasks in **T**, as measure by **P**, improves with experience **E**."

Any machine learning problem can be defided into two categories
1. Supervised Learning 
2. Unsupervised Learning

Supervised Learning
===================
In supervised learning we are given a dataset that already has a correct answer. Our objective is to learn from the data and come up with the mathematical model that best describes what we have learned.

The problem we are working on here is part of the supervised learning.
Let me describe what the data looks like

| Hour of day  | # Bike rentals |
| ------------- | ------------- |
|10| 36|
|11| 56|
|12| 84| 
|13| 94| 
|14| 106| 
|15| 110| 
|16| 93| 
|17| 67| 
|18| 35| 
|19| 37|

The first row is the time of the day and the second row is the number of bikes that were rented at the time. At 10 AM 36 bikes were rented, At 2 PM (14) 106 bikes were rented.

Lets plot the data to see what's going on.

{% for js in page.jsarr %}
	<script type="text/javascript">
    	{% include {{ js }} %}
 	</script>
{% endfor %}