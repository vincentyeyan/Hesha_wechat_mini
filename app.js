App({
  onLaunch: function () {
    var liked = wx.getStorageSync('liked')
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
      "liked": false,
      "name": "Mojito recipe",
      "description": "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water. Play with the quantities to suit your taste.",
      "ingredients": [
        "1 juice ",
        " 1 tsp granulated sugar",
        " small handful mint leaves",
        " 60ml white rum ",
        " and soda water."
      ],
      "instructions": [
        "1 Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.",
        "2 Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve."
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/afternoon-pick-me-up-smoothie.jpg?itok=qfhjHf6l"
    },
    {
      "id": 2,
      "liked": false,
      "name": "Rhubarb gin",
      "description": "Use seasonal rhubarb to make this for a G&T with a difference, or top the finished gin with soda water for a refreshing summertime drink in glorious pink.",
      "ingredients": [
        "1kg pink rhubarb",
        " 400g caster sugar",
        " and 800ml gin."
      ],
      "instructions": [
        "1 Wash the rhubarb, trim the stalks and discard the base and any leaves. Cut the stalks into 3cm lengths. Put in a large jar with the sugar. Shake everything around, put the lid on and leave overnight. The sugar will draw the juice out of the rhubarb.",
        "2 After 24 hrs, add the gin, seal and shake everything around. Leave for about 4 weeks before drinking. You can strain the liquor off through a muslin-lined sieve and transfer to a bottle, but I often just leave the rhubarb and booze in the jar and ladle it into drinks that way. Over time the rhubarb and the gin go a much paler colour – this doesn’t look as dramatic. The upside is you that have to get through it fairly quickly!"
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--879_12.jpg?itok=bnusLHEF"
    },
    {
      "id": 3,
      "liked": false,
      "name": "Easy sangria",
      "description": "Embrace balmy summer days with a jug of sangria. With red wine, Spanish brandy, sparkling water, cinnamon and chopped fruit, it's a lovely sharing cocktail",
      "ingredients": [
        "2 oranges",
        " 2 pears ",
        " 2 lemons",
        " 200g red berries",
        " 3 tbsp caster sugar",
        " 1 tsp cinnamon. ",
        " Ice",
        " 750ml bottle light red wine",
        " 100ml Spanish brandy",
        " and 300ml sparkling water."
      ],
      "instructions": [
        "1 Put the chopped fruit in a bowl and sprinkle over the sugar and cinnamon, then stir to coat. Cover and leave to macerate in the fridge for at least 1 hr, or ideally overnight.",
        "2 Fill a large jug with ice. Stir the macerated fruit mixture to ensure the sugar is dissolved, then tip into the jug with the wine and brandy. Stir, then top up with the sparkling water and serve."
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/06/smoothie.jpg?itok=rQNcvHlR"
    },
    {
      "id": 4,
      "liked": false,
      "name": "Espresso martini",
      "description": "Learn how to make this classic coffee cocktail. Our easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup",
      "ingredients": [
        "100g golden caster sugar",
        " ice",
        " 100ml vodka ",
        " 50ml freshly brewed espresso coffee",
        " 50ml coffee liqueur",
        " and 4 coffee beans"
      ],
      "instructions": [
        "1 Start by making the sugar syrup. Put the caster sugar in a small pan over a medium heat and pour in 50ml water. Stir, and bring to the boil. ",
        "2 Turn off the heat and allow the mixture to cool. Put 2 martini glasses in the fridge to chill.",
        "3 Once the sugar syrup is cold, pour 1 tbsp into a cocktail shaker along with a handful of ice, the vodka, espresso and coffee liqueur. Shake until the outside of the cocktail shaker feels icy cold. ",
        "4 Strain into the chilled glasses. Garnish each one with coffee beans if you like."
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/05/440-400-strawberry-green-goddess-smoothie.jpg?itok=DC3oWZOR"
    },
    {
      "id": 5,
      "liked": false,
      "name": "New York sour",
      "description": "Kick back and enjoy a New York sour. With whiskey, red wine, orange bitters and lemon juice, one sip will whisk you away to a Manhattan cocktail bar",
      "ingredients": [
        "50ml rye whiskey",
        " 25ml lemon juice",
        " 2 tsp maple syrup ",
        " dash orange bitters",
        " 1 tbsp egg white",
        " ice",
        " and 20ml red wine"
      ],
      "instructions": [
        "1 Pour the whiskey, lemon juice, maple syrup and bitters into a cocktail shaker. Stir the egg white with a fork to loosen it, then add it to the shaker. Shake really well to froth up the egg white. Add a good handful of ice and shake again.",
        "2 Once the outside of the shaker is really cold, double strain into a glass filled with ice. ",
        "3 Slowly pour the red wine on top and leave to settle for a few moments – the wine will rise to just under the frothy egg white. "
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/carrot-clementine-pineapple-juice_0.jpg?itok=Xy8hoZhq"
    },
    {
      "id": 6,
      "liked": false,
      "name": "Mudslide",
      "description": "Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving",
      "ingredients": [
        "50g dark chocolate",
        " ice",
        " 60ml coffee-flavoured liqueur",
        " 60ml vodka",
        " 60ml Irish cream liqueur",
        " and 100ml double cream"
      ],
      "instructions": [
        "1 Put two small tumblers in the fridge to chill overnight. Put 30g of the chocolate in a shallow bowl and melt in the microwave in short bursts. Dip the rim of the chilled glasses in the melted chocolate, then stand them upright so it gradually drips down the sides. Return to the fridge until you're ready to serve. ",
        "2 Fill a cocktail shaker with ice, then pour in the coffee-flavoured liqueur, vodka, Irish cream liqueur and double cream. Shake until the outside of the shaker is very cold. ",
        "3 Put a few ice cubes in the prepared glasses, then strain in the cocktail. Finely grate over the remaining chocolate and serve with a paper straw. "
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/afternoon-pick-me-up-smoothie.jpg?itok=qfhjHf6l"
    },
    {
      "id": 7,
      "liked": false,
      "name": "Sex on the beach cocktail",
      "description": "Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices",
      "ingredients": [
        "Ice",
        " 50ml vodka ",
        " 25ml peach schnapps",
        " 2 oranges, juiced",
        " 50ml cranberry juice",
        " and glacé cherries, to garnish."
      ],
      "instructions": [
        "1 Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir.",
        "2 Divide the mixture between the two glasses and stir gently to combine. Garnish with the cocktail cherries and orange slices. "
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/01/kiwi-smoothie.jpg?itok=WBwVk8Zq"
    },
    {
      "id": 8,
      "liked": false,
      "name": "Pink gin iced tea",
      "description": "Blend pink gin with iced tea and you have this unique cocktail, made with spiced rum, elderflower and pink grapefruit. Serve in a jug for a sharing cocktail ",
      "ingredients": [
        "1 chamomile tea bag",
        " 100ml pink gin",
        " 100ml spiced rum",
        " 100ml elderflower cordial",
        " 100ml pink grapefruit juice",
        " ice",
        " and 7 thyme sprigs."
      ],
      "instructions": [
        "1 Brew the chamomile tea bag with 500ml boiling water, steep for 2-3 mins or following pack instructions. Remove the bag and leave to cool for 5 mins. ",
        "2 Pour into a large jug with the pink gin, rum, elderflower cordial and juice. Add ice and stir, then add the thyme sprigs and stir again before serving. "
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/cropped-clean-green-smoothie.jpg?itok=9qA-Z_N4"
    },
    {
      "id": 9,
      "liked": false,
      "name": "Hurricane cocktail",
      "description": "Our tropical, rum-based hurricane cocktail is easy to make and sure to get your party started. Garnish with orange and cocktail cherries for a kitsch touch",
      "ingredients": [
        "50ml dark rum",
        " 50ml white rum",
        " 1 passion fruit",
        " 1 orange, juiced",
        " 1 lemon, juiced ",
        " 50ml sugar syrup",
        " 2 tsp grenadine",
        " 4 cocktail cherries",
        " and 2 orange slices."
      ],
      "instructions": [
        "1 Fill a cocktail shaker with ice then add the rums. Scoop the flesh and seeds from the passion fruit and add to the shaker along with the orange and lemon juices, sugar syrup and grenadine. ",
        "2 Shake well until the outside of the cocktail shaker feels icy cold. Fill two hurricane glasses with fresh ice then double strain the drink into the prepared glasses.   ",
        "3 Garnish each one with an orange slice skewered onto a cocktail stick and a couple of cocktail cherries. "
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/cropped-immune-boosting-smoothie.jpg?itok=14tZLFCh"
    },
    {
      "id": 10,
      "liked": false,
      "name": "Pink negroni",
      "description": "Go pink with this fabulous cocktail flavoured with pink gin, rose vermouth and Aperol. Garnish with a wedge of pink grapefruit and a basil leaf to serve",
      "ingredients": [
        "35ml pink gin",
        " 25ml rose vermouth, or sweet white vermouth",
        " 15ml Aperol",
        " ice",
        " a wedge of pink grapefruit and a basil leaf."
      ],
      "instructions": [
        "1 Combine the pink gin, vermouth and Aperol in a tumbler with a small handful of ice. Stir until the outside of the glass feels cold. ",
        "2 Garnish with a wedge of pink grapefruit and a basil leaf."
      ],
      "image": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/cropped-winter-warmer-smoothie.jpg?itok=DnXj2xmP"
    },
  ]
}
})