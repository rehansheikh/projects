
# coding: utf-8

# In[1]:

##Simple list.
ourList = [27, 46, -5, 17, 99]


# In[2]:

##Printing list
print(ourList)


# In[3]:

type(ourlist)


# In[4]:

##List with multiple datatypes.

multipleDataTypesList = ["A", "B", "C", 1,2,3,"Do", "Rey", "Mi", True, False]


# In[5]:

##Printing List
print(multipleDataTypesList)


# In[8]:

##Fetching the 8th element from list
multipleDataTypesList[7]


# In[9]:

##Fethcing the slice from list

multipleDataTypesList[0:3]


# In[10]:

##List inside list

listInsideList = [1,2,3,[3,4,5],6,7,8]


# In[11]:

##Fetching the 3rd element
listInsideList[2]


# In[13]:

##Fetching the first element from the inner list
listInsideList[3][0]


# In[ ]:

##Micro Project based on list concept.

knownUsers = ["Begum", "Rauf", "Shaheda", "Rehan", "Zubiya", "Alim", "Ruhi"]


# In[ ]:

while True:
    print("Hi My name is Travis")
    name = input("What is your name?").strip().lower()
    
    if name in knownUsers:
        print("name recognized")
    else:
        print("name NOT recognized")

