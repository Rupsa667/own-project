#no=int(input("the no is:"))
# if(no%2):
#   print("even")
# else:
 # print("odd")

# a=int(input("the 1st no is:"))
# b=int(input("the 2nd no is:"))
# c=int(input("the 3rd no is:"))
# if(a>b):
#   if(a>c):
#    print("the greatest no is:",a)
#   else:
#    print("the greatest no is:",c)
# else:
#  if(b>c):
#   print("the greatest no is:",b)
#  else:
#   print("the greatest no is:",c)

# i=100
# while(i>=1):
#   print(i)
#   i-=1

# n=int(input("enter the no:"))
# i=1
# while (i<=10):
#  print(n*i)
#  i+=1

# a=[1,4,6,9,40,34,98]
# index=0
# while(index<len(a)):
#   print(a[index])
#   index+=1

# tup=[1,4,9,16,25,100]               //search the no using while loop
# search=int(input("enter the no:"))
# index=0
# while(index<len(tup)):
#   if(search==tup[index]):
#     print("found",tup[index])
#   index+=1

# i=1
# while(i<=10):
#   if(i%2==0):
#     i+=1
#     continue
#   print(i)
#   i+=1

# i=1
# while(i<=10):
#   print(i)
#   if(i%2==0):
#      break
#   i+=1

# list=[1,3,5,2,6,8,9,7]
# for el in list:
#   print(el)

# tup=[1,4,6,7,9,2,3,]        //search the no using for loop
# x=int(input ("the no is:"))
# index=0
# for el in tup:
#   if(x==el):
#    print("found the no",index)
#   index+=1

# for i in range(1,101):
#  print(i)

# for i in range (100,0,-1):
#   print(i)

# a=int(input ("the no is:"))
# for i in range(1,11):
#   print(a*i)

# i=1
# n=int(input ("the no is:"))
# sum=0
# while(i<=n):
#   sum+=i
#   i+=1
# print("the sum is :",sum)

# n=int(input ("the no is:"))
# f=1
# for i in range(1,n+1):
#   f*=i
# print("factorial is",f)


# movies=[]                                           //programming of list
# movies.append(input("enter the first movie:"))
# movies.append(input("enter the second movie:"))
# movies.append(input("enter the third movie:"))
# print(movies)

# list_1=[1,2,1]             //programming of list
# list_2=list_1.copy()
# list_2.reverse()
# if(list_2==list_1):
#   print("palindrome")
# else:
#    print("not palindrome") 

# grade=("a","b","c","o","a","e","a")       //programming of tuple
# print(grade.count("a"))

# grade=["a","b","c","o","a","e","a"]       //programming of list
# grade.sort()
# print(grade)

# dictionary={
#   "table":{"a piece of furniture","list of facts and figures"},
#   "cat":"a small animal"
# }
# print(dictionary)

# subjects={                                                     //programming of set
#   "python","java","c","python","c","c++","c","java","c++"       
#   }
# print(subjects)
# print(len(subjects))

# dictionary={
#   "s1":int(input("enter the 1st no:")),
#   "s2":int(input("enter the 2nd no:")),
#   "s3":int(input("enter the 3rd no:"))
# }
# print(dictionary)

# values=("9",9.0)    //we write this program using string
# print(values)

# city=["kolkata","rishra","konnogor","bally"]                //using function
# food=["biriyani","fried rice","chilly chicken","moglai"]
# def blog(list):
#   print(len(list))
# blog(city)
# blog(food) 

# city=["kolkata","rishra","konnogor","bally"]                
# food=["biriyani","fried rice","chilly chicken","moglai"]
# def blog(list):
#   print(list)
# blog(city)
# blog(food) 

# def fact(n):
#   fact=1
#   for i in range(1,n+1):
#    fact*=i
#    print(fact)
# fact(int(input("the no is:")))

# def converter(usd_val):
#   ind_val=usd_val*83
# print(usd_val,"usd=",ind_val,"ind")
# converetr(5)


# clg hw
# a,b=2,7
# a,b=b,a
# print(a)
# print(b)
# p=int(input("p is"))
# q=int(input("q is"))
# temp=p
# p=q
# q=temp
# print("p is",p)
# print("q is",q)
# import math
# a=int(input("a"))
# b=int(input("b"))
# c=int(input("c"))
# s=(a+b+c)/2
# area=math.sqrt(s*(s-a)*(s-b)*(s-c))
# print("area is",area)
# import math
# p1=[4,2]
# p2=[1,2]
# dis=math.sqrt(((p1[0]-p2[0])**2)+((p1[1]-p2[1])**2))
# print("dis is:",dis)
s=35/7
print(s)