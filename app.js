App({
  onLaunch: function () {
    const base_url = 'http://localhost:3000/'
    wx.login({
      success: (res) => {
        console.log('code', res)
      wx.request({
        url: this.globalData.base_url + '/login',
        method: 'post',
        data: {
          code: res.code
        },
      success: (res) => {
      console.log('login res', res)
        this.globalData.userId = res.data.userId
      }
      })
      }
    })
  },

  
  globalData: {
    userInfo: null,
    // base_url: "http://localhost:3000/api/v1"
    // base_url: "https://hesha.wogengapp.cn/api/v1"
    
  recipes: [
    {
      "id": 1,
      "name": "Mojito recipe",
      "description": "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste",
      "ingredients": [
        "1 juice of 1 lime Lime ly-mThe same shape, but smaller than… ",
        "2 1 tsp granulated sugar",
        "3 small handful mint leaves, plus extra sprig to serve Mint mi-ntThere are several types of mint, each with its own subtle difference in flavour and appearance.… ",
        "4 60ml white rum Rum rhumRum is a type of spirit based on sugar cane. First produced in the 1600s on slave plantations in… ",
        "5 soda water, to taste"
      ],
      "instructions": [
        "1 Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.",
        "2 Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve."
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2013/11/mojito-cocktails.jpg"
    },
    {
      "id": 2,
      "name": "Rhubarb gin",
      "description": "Use seasonal rhubarb to make this for a G&T with a difference, or top the finished gin with soda water for a refreshing summertime drink in glorious pink",
      "ingredients": [
        "1 1kg pink rhubarb stalks Rhubarb roo-barbBotanically, rhubarb is a vegetable (it's related to sorrel and dock) but its thick, fleshy… ",
        "2 400g caster sugar (don't use golden - it muddies the colour)",
        "3 800ml gin Gin jinnGin has enjoyed a huge revival recently. It's usually served alongside tonic water (a… "
      ],
      "instructions": [
        "1 Wash the rhubarb, trim the stalks and discard the base and any leaves. Cut the stalks into 3cm lengths. Put in a large jar with the sugar. Shake everything around, put the lid on and leave overnight. The sugar will draw the juice out of the rhubarb.",
        "2 After 24 hrs, add the gin, seal and shake everything around. Leave for about 4 weeks before drinking. You can strain the liquor off through a muslin-lined sieve and transfer to a bottle, but I often just leave the rhubarb and booze in the jar and ladle it into drinks that way. Over time the rhubarb and the gin go a much paler colour – this doesn’t look as dramatic. The upside is you that have to get through it fairly quickly!"
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/04/rhubarb-gin.jpg"
    },
    {
      "id": 3,
      "name": "Easy sangria",
      "description": "Embrace balmy summer days with a jug of sangria. With red wine, Spanish brandy, sparkling water, cinnamon and chopped fruit, it's a lovely sharing cocktail",
      "ingredients": [
        "1 2 oranges, chopped Orange or-ange One of the best-known citrus fruits, oranges aren't necessarily orange - some varieties are… ",
        "2 2 pears, chopped Pear pairLike apples, to which they are related, pears come in thousands of varieties, of which only a… ",
        "3 2 lemons, 1 chopped, 1 juiced Lemon le-monOval in shape with a pronouced bulge on one end, lemons are one of the most versatile… ",
        "4 200g red berries, chopped (we used strawberries and cherries)",
        "5 3 tbsp caster sugar",
        "6 1 tsp cinnamon Cinnamon sin-ah-munA fragrant spice which comes from the inner bark of a tropical tree. When dried, it curls into… ",
        "7 ice",
        "8 750ml bottle light red wine",
        "9 100ml Spanish brandy Brandy bran-deeBrandy is a distilled spirit made from virtually any fermented fruit or starchy vegetable.… ",
        "10 300ml sparkling water"
      ],
      "instructions": [
        "1 Put the chopped fruit in a bowl and sprinkle over the sugar and cinnamon, then stir to coat. Cover and leave to macerate in the fridge for at least 1 hr, or ideally overnight.",
        "2 Fill a large jug with ice. Stir the macerated fruit mixture to ensure the sugar is dissolved, then tip into the jug with the wine and brandy. Stir, then top up with the sparkling water and serve."
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/06/sangria-new-crop.jpg"
    },
    {
      "id": 4,
      "name": "Espresso martini",
      "description": "Learn how to make this classic coffee cocktail. Our easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup",
      "ingredients": [
        "1 100g golden caster sugar",
        "2 ice",
        "3 100ml vodka Vodka vod-kaOriginally associated with Russia, Slavonic, Baltic and Scandinavian countries, vodka has become… ",
        "4 50ml freshly brewed espresso coffee",
        "5 50ml coffee liqueur (we used Kahlua)",
        "6 4 coffee beans (optional)"
      ],
      "instructions": [
        "1 Start by making the sugar syrup. Put the caster sugar in a small pan over a medium heat and pour in 50ml water. Stir, and bring to the boil. ",
        "2 Turn off the heat and allow the mixture to cool. Put 2 martini glasses in the fridge to chill.",
        "3 Once the sugar syrup is cold, pour 1 tbsp into a cocktail shaker along with a handful of ice, the vodka, espresso and coffee liqueur. Shake until the outside of the cocktail shaker feels icy cold. ",
        "4 Strain into the chilled glasses. Garnish each one with coffee beans if you like."
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/espresso-martini.jpg"
    },
    {
      "id": 5,
      "name": "New York sour",
      "description": "Kick back and enjoy a New York sour. With whiskey, red wine, orange bitters and lemon juice, one sip will whisk you away to a Manhattan cocktail bar",
      "ingredients": [
        "1 50ml rye whiskey",
        "2 25ml lemon juice",
        "3 2 tsp maple syrup Maple syrup may-pul sir-rupThe rising spring sap of a number of varieties of maple tree… ",
        "4 dash orange bitters",
        "5 1 tbsp egg white",
        "6 ice",
        "7 20ml red wine"
      ],
      "instructions": [
        "1 Pour the whiskey, lemon juice, maple syrup and bitters into a cocktail shaker. Stir the egg white with a fork to loosen it, then add it to the shaker. Shake really well to froth up the egg white. Add a good handful of ice and shake again.",
        "2 Once the outside of the shaker is really cold, double strain into a glass filled with ice. ",
        "3 Slowly pour the red wine on top and leave to settle for a few moments – the wine will rise to just under the frothy egg white. "
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/05/new-york-sour.jpg"
    },
    {
      "id": 6,
      "name": "Mudslide",
      "description": "Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving",
      "ingredients": [
        "1 50g dark chocolate Chocolate ganache gan-ashChocolate ganache is a combination of chocolate and double cream. It's simple to… ",
        "2 ice",
        "3 60ml coffee-flavoured liqueur",
        "4 60ml vodka Vodka vod-kaOriginally associated with Russia, Slavonic, Baltic and Scandinavian countries, vodka has become… ",
        "5 60ml Irish cream liqueur",
        "6 100ml double cream"
      ],
      "instructions": [
        "1 Put two small tumblers in the fridge to chill overnight. Put 30g of the chocolate in a shallow bowl and melt in the microwave in short bursts. Dip the rim of the chilled glasses in the melted chocolate, then stand them upright so it gradually drips down the sides. Return to the fridge until you're ready to serve. ",
        "2 Fill a cocktail shaker with ice, then pour in the coffee-flavoured liqueur, vodka, Irish cream liqueur and double cream. Shake until the outside of the shaker is very cold. ",
        "3 Put a few ice cubes in the prepared glasses, then strain in the cocktail. Finely grate over the remaining chocolate and serve with a paper straw. "
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/mudslide.jpg"
    },
    {
      "id": 7,
      "name": "Sex on the beach cocktail",
      "description": "Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices",
      "ingredients": [
        "1 ice",
        "2 50ml vodka Vodka vod-kaOriginally associated with Russia, Slavonic, Baltic and Scandinavian countries, vodka has become… ",
        "3 25ml peach schnapps",
        "4 2 oranges, juiced, plus 2 slices to garnish Orange or-ange One of the best-known citrus fruits, oranges aren't necessarily orange - some varieties are… ",
        "5 50ml cranberry juice",
        "6 glacé cherries, to garnish (optional)"
      ],
      "instructions": [
        "1 Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir.",
        "2 Divide the mixture between the two glasses and stir gently to combine. Garnish with the cocktail cherries and orange slices. "
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/sex_on_the_beach.jpg"
    },
    {
      "id": 8,
      "name": "Pink gin iced tea",
      "description": "Blend pink gin with iced tea and you have this unique cocktail, made with spiced rum, elderflower and pink grapefruit. Serve in a jug for a sharing cocktail ",
      "ingredients": [
        "1 1 chamomile tea bag",
        "2 100ml pink gin",
        "3 100ml spiced rum",
        "4 100ml elderflower cordial",
        "5 100ml pink grapefruit juice",
        "6 ice",
        "7 thyme sprigs, to garnish ThymeThis popular herb grows in Europe, especially the Mediterranean, and is a member of the mint… "
      ],
      "instructions": [
        "1 Brew the chamomile tea bag with 500ml boiling water, steep for 2-3 mins or following pack instructions. Remove the bag and leave to cool for 5 mins. ",
        "2 Pour into a large jug with the pink gin, rum, elderflower cordial and juice. Add ice and stir, then add the thyme sprigs and stir again before serving. "
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/gin_iced_tea.jpg"
    },
    {
      "id": 9,
      "name": "Hurricane cocktail",
      "description": "Our tropical, rum-based hurricane cocktail is easy to make and sure to get your party started. Garnish with orange and cocktail cherries for a kitsch touch",
      "ingredients": [
        "1 50ml dark rum",
        "2 50ml white rum",
        "3 1 passion fruit",
        "4 1 orange, juiced Orange or-ange One of the best-known citrus fruits, oranges aren't necessarily orange - some varieties are… ",
        "5 1 lemon, juiced Lemon le-monOval in shape with a pronouced bulge on one end, lemons are one of the most versatile… ",
        "6 50ml sugar syrup",
        "7 2 tsp grenadine",
        "8 4 cocktail cherries",
        "9 2 orange slices"
      ],
      "instructions": [
        "1 Fill a cocktail shaker with ice then add the rums. Scoop the flesh and seeds from the passion fruit and add to the shaker along with the orange and lemon juices, sugar syrup and grenadine. ",
        "2 Shake well until the outside of the cocktail shaker feels icy cold. Fill two hurricane glasses with fresh ice then double strain the drink into the prepared glasses.   ",
        "3 Garnish each one with an orange slice skewered onto a cocktail stick and a couple of cocktail cherries. "
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/11/hurricane.jpg"
    },
    {
      "id": 10,
      "name": "Pink negroni",
      "description": "Go pink with this fabulous cocktail flavoured with pink gin, rose vermouth and Aperol. Garnish with a wedge of pink grapefruit and a basil leaf to serve",
      "ingredients": [
        "1 35ml pink gin",
        "2 25ml rose vermouth, or sweet white vermouth",
        "3 15ml Aperol",
        "4 ice",
        "5 wedge of pink grapefruit and a basil leaf, to garnish Grapefruit grape-frootNamed for the fact that the fruits grow in grape-like bunches, grapefruits are the largest… "
      ],
      "instructions": [
        "1 Combine the pink gin, vermouth and Aperol in a tumbler with a small handful of ice. Stir until the outside of the glass feels cold. ",
        "2 Garnish with a wedge of pink grapefruit and a basil leaf."
      ],
      "image": "www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/classic-negroni.jpg"
    },
  ]
}
})