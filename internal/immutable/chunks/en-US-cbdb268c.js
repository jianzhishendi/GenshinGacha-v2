const e="Genshin Impact Wish Simulator",t="Character",a="Weapon",n="Vision",o="Anemo",i="Cryo",r="Dendro",s="Electro",l="Hydro",c="Geo",h="Pyro",u="Bow",p="Catalyst",d="Claymore",m="Sword",w="Polearm",f="Extra",y="Obtained",g="Waiting",b="Connection Failed!",v="Confirm",S="Cancel",P="All assets used in this site are owned by Mihoyo.",I="This is purely a fan made Application, enjoy it !",C="Press anywhere in the blank area to continue",W="Instructions to Install to Home Screen/Desktop",F="Share",T="Take Picture",x="Capturing",B="Reward for first share : {qty}",A="Version",E="Donate",N={wishTitle:"Wish",rollButton:"Wish {count}",stellaFortuna:"Stella Fortuna",banner:{text:"Banner",allBanner:"All Banners",previous:"Previous Banner",findBanner:"Find a Banner",group:"Group",events:"Character Event Wish",beginner:"Beginners' Wish",weapons:"Weapons Wish",standard:"Standard Wish",wishDescription:"Every 10 wishes is guaranteed to include at least one 4-star or higher item",novice:"Novice Wishes",up:"UP!",beginnerSet:"10-set 20% off. First 10-set will receive {character}.",beginnerNote:'"As a dutiful maid would."',beginnerChance:"Chances Remaining: {chances}",standardNote:"Standard whises have no time limit.",allWeaponTypes:"All Weapon Types",etc:"etc.",probIncreased:"Probability increased !",eventNote:"5-Star event-exclusive characters can only be obtained in the specified wish during the specified time period(s).",viewDetails:"View Details for more.",name:{wanderlust:"Wanderlust Invocation","epitome-invocation":"Epitome Invocation","adrift-in-the-harbor":"Adrift&nbsp;in The Harbor","azure-excursion":"Azure Excursion","ballad-in-goblets":"Ballad in Goblets","born-of-ocean-swell":"Born of Ocean Swell","dance-of-lantern":"Dance of Lantern","discerner-of-enigmas":"Discerner of Enigmas","drifting-luminescence":"Drifting Luminescence","everbloom-violet":"Everbloom Violet","farewell-of-snezhnaya":"Farewell of Snezhnaya","from-ashes-reborn":"From&nbsp;Ashes Reborn","gentry-of-hermitage":"Gentry of Hermitage","invitation-to-mundane-life":"Invitation&nbsp;to Mundane Life","leaves-in-the-wind":"Leaves in The Wind","moment-of-bloom":"Moment of Bloom","oni_s-royale":"Oni's Royale","reign-of-serenity":"Reign&nbsp;of Serenity","secretum-secretorum":"Secretum Secretorum","sparkling-steps":"Sparkling Steps","tapestry-of-golden-flames":"Tapestry&nbsp;of Golden Flames","the-heron_s-court":"The Heron's Court","the-moongrass-enlightenment":"The&nbsp;Moongrass' Enlightenment","the-transcendent-one-returns":"The&nbsp;Transcendent One Returns","twilight-arbiter":"Twilight Arbiter","twirling-lotus":"Twirling Lotus","viridescent-vigil":"Viridescent Vigil"}},epitomizedPath:{text:"Epitomized Path",fatePoint:"Fate Points",cancelPrompt:"Do you wish to cancel your curent Course ?",cancelDesc:"Cancelation will reset your accumulated Fate Points",selectWeapon:"Select Weapon",chartCourseOf:"Chart Course of {target}",cancelCourse:"Cancel Course",chartCourse:"Chart Course",courseSetFor:"Course Set For: {selectedCourse}",description:['"Epitomized Path" is a wish mechanic in "Epitome Invocation". Travelers can chart a course towards a specific 5-Star promotional weapon they hope to obtain.',"Once you have charted a course towards your chosen weapon, you will obtain 1 Fate Point upon <span> receiving a 5-Star weapon that is not the one that you chose</span>. You can obtain a maximum of 2 Fate Points.",`Once you've reached the maximum amount of Fate Points, the next 5-Star weapon you choose will be the one you have chosen through "Epitomized Path".`,"When you obtain the chosen weapon in Epitome Invocation through Epitomized Path, <span> the accumulated Fate Points will be cleared </span>.","If you do not use Epitomized Path to obtain a weapon, you will not accumulate Fate Points.","The charted course towards a certain weapon can be changed or cancelled. However, after doing so, any current Fate Points will be cleared.","At the end of the current period of Epitome Invocation, any current Fate Points will be cleared."]},result:{skip:"Skip",meteorFailed:"Meteor Animation Failed to Load",new:"New",convertion:"Convertion",title:"Wish Result for {item} et al"}},D={heading:"Character Outfits",default:"Default",setOutfit:"Set Outfit",owned:"Already Owned",purchasePrompt:"You don't have a character for this costume yet, are you sure to purchase this costume?",promptInfo:"You still can use this costume after getting the right character",item:{"5-star-outrider":{name:"5-Star Outrider"},"favonian-fevotion":{name:"Favonian Devotion"},"flowing-fate":{name:"Flowing Fate"},"executor_s-thorns":{name:"Executor's Thorns"},"sea-breeze-dandelion":{name:"Sea Breeze Dandelion",description:"Jean's summer wear. Light and cool, but no less elegant for it. The perfect choice for a trip to the seaside."},"summertime-sparkle":{name:"Summertime Sparkle",description:"Barbara's beach attire. This pretty skirt brims with summer vitality and carries with it a cool ocean breeze."},"opulent-splendor":{name:"Opulent Splendor",description:"Keqing's formal wear. Amidst the beautiful dawn of the Lantern Rite, the threads weaved by days of hard work intertwine into a light yet magnificent appearance."},"orchid_s-evening-gown":{name:"Orchid's Evening Gown",description:"Ningguang's formal wear. The long cyan skirt traces her elegant curves, and the butterfly wings at her ankles lend the outfit a touch of light grace."},"ein-immernachtstraum":{name:"Ein Immernachtstraum",description:"A ceremonial outfit for the Prinzessin. May she who is noble retain her courage, sincerity, and kindness forever, such that no evil shall ever overcome her."},"red-dead-of-night":{name:"Red Dead of Night",description:"One of the outfits Diluc wears during covert actions, it resembles a flame dancing in the shadows. The crimson red traces it leaves behind at the edges of the enemy's vision will scar their nightmares forever."}}},O={text:"Details",promotional:"Promotional Items",itemlist:"List of Items",increasedRate:"Increased Drop Rates",percentageDrop:"Percentage of {rarity}-Star Item Drops: {percentage}",wishDetails:"Wish Details",probInfo:"Base Probability for {rarity}-Star Item Drops: {singlePercentage} (Incl. guarantee: {avgPercentage})",itemWishFor:"Item to wish for :",itemType:"Item Type",itemName:"Item Name",beginnerInfo:"No time limit (Closes after 20 wishes)",limited:"Limited Time Event",permanent:"Permanent",alert:"\u203B This is a {wishName}. The wish guarantee count is accumulated within this event only and is independent of the guarantee counts of other wishes.",beginner:["Beginners' <span> Wish </span> has no time limit and is aimed at Travelers who have recently landed in Teyvat. Non-promotional characters and weapons are available. <br /> In Beginners' Wish, 10-wish sets cost <span> 20%</span> less Acquaint Fate, and your first 10-wish set is guaranteed to include {character} , and your second 10-wish set is guaranteed to include one <span> other </span> min. 4-Star character! <br/> Beginners' Wish expires after <span> 20 </span> attempts. After the wish expires, the page will disappear.","\u203BIn most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.","\u3013Rules\u3013","Base probability of winning 5-Star character = <span> 0.600%</span> <br /> Base probability of winning 4-Star character = <span> 5.100%</span>; consolidated probability (incl. guarantee) = <span> 13.000%</span>;"],standard:['"{bannerName}" is a standard wish with no time limit. Non-event-exclusive characters and weapons are available.<br/> In this wish, <span>guaranteed</span> to win 4-star or above item at least once per 10 attempts.',"\u203BIn most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.","\u3013Rules\u3013","Base probability of winning 5-star item = <span>0.600%</span>; base probability of winning 5-star character = <span>0.300%</span>, and base probability of winning 5-star weapon = <span>0.300%</span>; consolidated probability (incl. guarantee) of winning 5-star item = <span>1.600%</span>; guaranteed to win 5-star item at least once per <span>90</span> attempts. <br> Base probability of winning 4-star item = <span>5.100%</span>; base probability of winning 4-star character = <span>2.550%</span>, and base probability of winning 4-star weapon = <span>2.550%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span>13.000%</span>; guaranteed to win 4-star or above item at least once per <span>10</span> attempts; probability of winning 4-star item through the guarantee = <span>99.400%</span>, and probability of winning 5-star item through the guarantee = <span>0.600%</span>. "],events:['Event Wish "{bannerName}" is now available. During this event wish, the  <span>event-exclusive</span> 5-star character {featuredCharacter} as well as 4-star characters {rateupCharacters} will get a <span> huge drop-rate boost</span>! <br/> <span> \u203B Of the above characters, the event-exclusive character will not be available in the standard wish "Wanderlust Invocation."</span>',"\u203B In most cases, drifting base probability of all characters and weapons is evenly distributed. If driftingre is a boost or guarantee in effect, please refer to drifting corresponding rules.","\u3013Rules\u3013","5-Star Items",'For Event Wish "{bannerName}": Base probability of winning 5-star character = <span> 0.600% </span>; consolidated probability (incl. guarantee) = <span>1.600%</span>; guaranteed to win 5-star character at least once per <span> 90</span> attempts.<br/> The first time you win a 5-star item in this event wish, there is a <span> 50.000%</span> chance it will be the promotional character {featuredCharacter}. If the first 5-star character you win in this event wish is not the promotional character, then the next 5-star character you win is <span> guaranteed</span> to be the promotional character.',"4-Star Items",'For Event Wish  "{bannerName}": Base probability of winning 4-star item = <span> 5.100%</span>; base probability of winning 4-star character = <span>2.550%</span>, and base probability of winning 4-star weapon = <span>2.550%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span> 13.000%</span>; guaranteed to win 4-star or above item at least once per 10 attempts; probability of winning 4-star item through the guarantee = <span>99.400%</span>, and probability of winning 5-star item through the guarantee = <span>0.600%</span>. <br/> The first time you win a 4-star item in this event wish, there is a <span>50.000%</span> chance it will be one of the featured characters {rateupCharacters}. If the first 4-star item you win in this event wish is not one of the featured characters, then the next 4-star item you win is <span>guaranteed</span> to be a featured character. When you win a featured 4-star item, the probability of obtaining each featured 4-star character is equal between all of them.'],weapons:['Event Wish "{bannerName}" is now available. During this event wish, the <span>event-exclusive</span> 5-star weapon {featuredWeapon1} and the 5-star weapon {featuredWeapon2} as well as the <span>event-exclusive</span> 4-star weapon {rateupWeapons}  will get a <span>huge drop-rate boost!</span> <br/> <span> \u203B Of the above weapons, the event-exclusive weapons will not be available in the standard wish "Wanderlust Invocation."</span>',"\u203B In most cases, the base probability of all characters and weapons is evenly distributed. If there is a boost or guarantee in effect, please refer to the corresponding rules.","\u3013Rules\u3013","5-Star Items",'For Event Wish "{bannerName}": Base probability of winning 5-star weapon = <span>0.700%</span>; consolidated probability (incl. guarantee) = <span>1.850%</span>; guaranteed to win 5-star weapon at least once per <span>80</span> attempts.<br/> The first time you win a 5-star weapon in this event wish, there is a <span>75.000%</span> chance it will be one of the promotional weapons {featuredWeapon1} and {featuredWeapon2}. If the first 5-star weapon you win in this event wish is not one of the promotional weapons, then the next 5-star weapon you win is <span>guaranteed</span> to be a promotional weapon. In the event that you obtain a promotional 5-star item through a wish without having maximum Fate Points, the probability of obtaining each promotional 5-star weapon is equal between all of them. <br/> For Event Wish "{bannerName}", you can chart a course towards your chosen promotional 5-star weapon with "Epitomized Path." The choice of weapon will only be valid for this period of Event Wish "{bannerName}". <br/> For Event Wish "{bannerName}", after charting a course towards a chosen weapon with "Epitomized Path," if you obtain a 5-star weapon that was not your chosen weapon, you will receive 1 Fate Point. Once you have reached the <span>maximum amount</span> of Fate Points, the next 5-star weapon will be <span>guaranteed</span> to be your chosen weapon. Once you have obtained the chosen weapon, the number of Fate Points will reset to <span>0</span> whether or not you have reached maximum points, and you will have to accumulate them again. If you do not use the "Epitomized Path" to chart a course towards a chosen weapon, you will <span>not</span> receive Fate Points. <br/> After charting a course towards a chosen weapon, you can change your choice or cancel it altogether, but doing so will reset the Fate Points to <span>0</span> and you will have to accumulate them again. <br/> \u203B The Fate Points for this Wish are only valid for the current period of Event Wish "Epitome Invocation". Once the Wish event is over, the number of Fate Points will reset to <span>0</span>, and you will have to accumulate them again',"4-Star Items",'For Event Wish "{bannerName}": Base probability of winning 4-star item = <span>6.000%</span>; base probability of winning 4-star character = <span>3.000%</span>, and base probability of winning 4-star weapon = <span>3.000%</span>; consolidated probability (incl. guarantee) of winning 4-star item = <span>14.500%</span>; guaranteed to win 4-star or above item at least once per <span>10</span> attempts; probability of winning 4-star item through the guarantee = <span>99.300%</span>, and probability of winning 5-star item through the guarantee = <span>0.700%</span>. <br/> The first time you win a 4-star item in this event wish, there is a <span>75.000%</span> chance it will be one of the featured weapons {rateupWeapons}. If the first 4-star item you win in this event wish is not one of the featured weapons, then the next 4-star item you win is <span>guaranteed</span> to be a featured weapon. When you win a featured 4-star item, the probability of obtaining each featured 4-star weapon is equal between all of them.'],convertion:{fiveStar:"5-Star weapons won in this wish come with {starglitter} \xD710;",fourStar:"4-star weapons won in this wish come with {starglitter} \xD72;",threeStar:"3-star weapons won in this wish come with {stardust} \xD715."},duplicate:{heading:"\u3013Duplicate Characters\u3013",text:"On obtaining a {rarity}-Star character that you already own (whether obtained in a wish, redeemed at the shop, or awarded by the game): The 2nd - 7th time you obtain the character, it will be converted into that character's {stellaFortuna} \xD71 and {starglitter} {constBonus}; from the 8th time onwards it will be converted into {starglitter} {fullConstBonus}."}},R={title:"Wish History",text:"History",resetButton:"Clear",resetPromptTitle:"Clear History ?",resetPrompt:`It's also remove all Characters and Weapons related to "{bannerName}" Banner from your Inventory. <br /> Are You Sure to Reset ?`,resetSuccess:"Reset Successful !",selectWish:"Select Wish Type:",disclaimer:"We Never save your data on cloud storage. All data was stored to IndexedDB, it means the data is saved on your browser storage. It will never delete till you delete it manualy through delete/reset button or clear the browser data.",currentPity:"Current Pity :",totalPull:"Total Pull :",totalSpend:"Total Spend :",filterTxt:"Filter",filter:"{rarity} Star",filterAll:"All",pity:"Pity",timeReceived:"Time Received",waiting:"Waiting",noData:"No data available .",untracked:"Untracked",item:"Item",win:"Win 50/50",lose:"Lose 50/50",guaranteed:"Guaranteed",selected:"Selected Weapon",primos:"Primos",olderLayout:"Older Layout",switchv2:"Switch to V2"},k={text:"Shop",paimonBargains:"Paimon Bargains",fateNeeded:"An Aditional {rollQty} {currency} are needed.",primoNeeded:"Purchase with {primoPrice} Primogem ?",purchaseUpto:"Purchase Up to 1",purchaseConfirm:"Purchase Confirmation",exchangeHeading:"Item To Exchange",purchaseHeading:"Item To Purchase",purchaseButton:"Purchase",pay:"Pay",product:"Product",consume:"Consume",selectPayment:"Select Payment Type",unrealWallet:"UnReal Wallet",convertPrimo:" Auto convert to primogem ?",proceedPayment:"Proceed Payment",qty:"Qty",insufficient:"Insufficient Funds",crystalTopup:"Crystal Top-Up",buyGenesisHeading:"Buy Genesis Crystal",recomendedHeading:"Recommended Items",paimonHeading:"Paimon's Bargains",welkinNote:"Can be purchased multiple times",limitedOffer:"Limited Time Offer",noLimitTime:"No Limit time items available",recomended:{welkin:"Blessing of the Welkin Moon",newOutfit:"New Character Outfits",dayRemaining:"Days remaining: {days}",alreadyClaimed:"Already Claimed today",instantlyGet:"Instantly Get",dailyGift:"Daily Gift",obtainTotal:"Obtain a total {totalGenesis} Genesis Crystal and {totalPrimo} Primogems across 30 days",claimingBlessing:"Click to claim your daily Blessing of the Welkin Moon rewards",issuedPurchase:"Issued on purchase",collect:"Collect daily login rewards for 30 days"},exchange:{starglitter:"Starglitter Exchange",stardust:"Stardust Exchange",primogem:"Exchange with Primogem"},item:{genesis:"Genesis Crystal",primogem:"Primogem",intertwined:"Intertwined Fate",acquaint:"Acquaint Fate",starglitter:"Masterless Starglitter",stardust:"Masterless Stardust"},description:{intertwined:"A fateful stone that connects dreams. Its glimmers can entwine fates and connect dreams, just as how its glimmer links stars into the shapes of a heart's desires.",acquaint:"A seed that lights up the night. No matter the distance apart, guided by the stone's glimmer, the fated will meet under the stars."}},z={text:"Inventory",unsetOutfit:"Unset Outfit",setOutfit:"Set Outfit to Character",refinement:"Refinement {count}",constellation:"Constellation {count}",extra:"{count} Extra",firstSummon:"First Summoned at : {date}",notOwned:"Not Owned",sort:"Sort",rarity:"Rarity",name:"Name",quantity:"Quantity",element:"Element",type:"Type",owned:"Owned",showAllOption:"Show All {item}s ( {qty} Summoned )"},G={no:"No",yes:"Yes",text:"Menu",options:"Options",updates:"Update History",language:"Language",currency:"Currency",fates:"Unlimited Fates",mute:"Mute Audio and Sound Effect",switchBanner:"Switch Banner",showAllitems:"Show all items on Inventory",animeoff:"Auto Skip Splash Art",animatedbg:"Animated Background",factoryReset:"Clear Data and Restore Default",resetTitle:"Factory Reset",rotate:"Rotate for better experience",clearCache:"Clear Caches ( {size} ) ? You will re-load the assets after this action!",resetButton:"Reset Now",resetPrompt:"Are You sure to clear <strong> All Data </strong> and restore to default ?",resetDetail:"It also remove your History, Pity Calculation, Balance and all items from Inventory.",resetSuccess:"Reset Successful",removeAds:"Remove Ads",removeKey:"Remove AdKey",removeKeyConfirm:"Are You sure to remove the current adKey ? You need to enter a new key to remove the future ads!",getNewKey:"Get a new one Here!",noKey:"Don't have a key?",verifyFail:"Failed to verifying AdKey, Check your Connection !",invalidKey:"Your key isn't valid",adFreeUser:"You're enjoying Simulator Without Ads !",inputKeyPlaceholder:"Enter Key",inputKeyTxt:"Input the Key to Remove Ads !",checkingKey:"Verifying Stored AdKey",authorNotes:"* I need to say sorry about the ads. Actually I don't want to ruin your wishing experience, but I don't have any Team or Sponsor to keep this app alive. If you don't want to spend anythings, You can still turn on the Ad Blocker or just use custom DNS, I will not forbid you."},H={title:e,character:t,weapon:a,vision:n,anemo:o,cryo:i,dendro:r,electro:s,hydro:l,geo:c,pyro:h,bow:u,catalyst:p,claymore:d,sword:m,polearm:w,extra:f,obtained:y,waiting:g,connectionFailed:b,confirmButton:v,cancelButton:S,disclaimer:P,fanmade:I,pressToContinue:C,installInstruction:W,share:F,screenshot:T,capturing:x,rewardFirstShare:B,version:A,donate:E,wish:N,outfit:D,details:O,history:R,shop:k,inventory:z,menu:G};export{o as anemo,u as bow,S as cancelButton,x as capturing,p as catalyst,t as character,d as claymore,v as confirmButton,b as connectionFailed,i as cryo,H as default,r as dendro,O as details,P as disclaimer,E as donate,s as electro,f as extra,I as fanmade,c as geo,R as history,l as hydro,W as installInstruction,z as inventory,G as menu,y as obtained,D as outfit,w as polearm,C as pressToContinue,h as pyro,B as rewardFirstShare,T as screenshot,F as share,k as shop,m as sword,e as title,A as version,n as vision,g as waiting,a as weapon,N as wish};
