#include <stdio.h>
#include <stdlib.h>

/*{
 int tab[6];
 int i;
 for (i=0;i<6; i++)
 {
     tab[i]=0;
     printf("T[%d] = %d\n",i,tab[i]);

 }


}*/
/*{
  char T [6];
  int i;
  T[0]='A';
  T[1]='E';
  T[2]='I';
  T[3]='O';
  T[4]='U';
  T[5] ='Y';

   for (i=0; i<6; i++)
   {
       printf("T[%d]= %c\n",i,T[i]);
   }
}*//*
{
    float T[10];
    int i;
    float S,P,M;

    printf("Veuillez entrer les elements du tableau \n");
    for (i=0; i<10; i++)
    {
        printf("T[%d] = ",i);
        scanf("%f",&T[i]);
    }
    S=0; P=1;
    for (i=0; i<10; i++) {
        S= S + T[i];
        P = P * T[i];
    }
    M = S/10;
    printf ("La somme est : %.2f\n",S);
    printf("Le produit est : %.2f\n",P);
    printf("La Moyenne est : %.2f\n",M);

    return 0;

}*//*
{
    float U[3], V[3];
    int i;
    float P;
    printf("veuillez entrer les valeurs deux vecteurs :\n" );
    for (i=0; i<3; i++)
    {
        printf("U[%d] =",i);
        scanf("%f",&U[i]);
        printf("V[%d] =",i);
        scanf("%f",&V[i]);
    }
    P= 0;
    for (i=0; i<3; i++)
    {
        P= P+ U[i]*V[i];
    }
    printf("le produit scalaire des dxeux vecteurs est : %.2f",P);

}*/
int main ()
{

    /*int T[10];
    int i, min;
    printf("veuillez entrer les elements du tableau :\n");
    for (i=0; i<10; i++)
    {
        printf("T[%d]=",i);
        scanf("%d",&T[i]);
    }
    min = T[0];
    for (i=0; i<10; i++)
    {
        if(min>T[i])
            min = T[i];
    }
    printf("le minimum est : %d",min);
}*//*

{
    int T[10];
    int i, maxi;
    printf("veuillez entrer les elements du tableau :\n");
    for (i=0; i<10; i++)
    {
        printf("T[%d]=",i);
        scanf("%d",&T[i]);
    }
    maxi = T[0];
    for (i=0; i<10; i++)
    {
        if(maxi<T[i])
            maxi = T[i];
    }
    printf("le maximum est : %d",maxi);
}*/
{

}
