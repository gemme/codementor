
let assert = require("chai").assert;
let {sortCsvColumns} = require('../index');


describe('Challenge', function() {
  // this is just a simple input
  it('should handle the example :: simple input', function() {
    assert.equal(sortCsvColumns("Beth,Charles,Danielle,Adam,Eric\n17945,10091,10088,3907,10132\n2,12,13,48,11"), "Adam,Beth,Charles,Danielle,Eric\n3907,17945,10091,10088,10132\n48,2,12,13,11");
  });
  // an input with many lines
  it('should handle many lines', function() {

    const input = 'id,First Name,Last Name,Suffix,email,Active,country,Notes\n1,Judith,Williamson,,jwilliamson0@sfgate.com,false,Poland,augue vel accumsan tellus\n2,Paul,Kelly,,pkelly1@reference.com,false,China,lacus at velit\n3,Lillian,Payne,,lpayne2@ftc.gov,false,China,pede libero quis orci\n4,Eric,Berry,,eberry3@qq.com,false,Jamaica,odio donec\n5,Marie,Dunn,,mdunn4@studiopress.com,false,Democratic Republic of the Congo,metus aenean fermentum donec ut\n6,Helen,Montgomery,Sr,hmontgomery5@fastcompany.com,true,Philippines,rutrum ac lobortis vel\n7,Jose,Kim,,jkim6@nhs.uk,false,Yemen,nunc viverra\n8,Carol,Mason,,cmason7@flickr.com,false,Thailand,tortor sollicitudin mi\n9,Andrew,Sanchez,,asanchez8@google.com.hk,true,Nigeria,purus phasellus in felis donec\n10,Brandon,Frazier,,bfrazier9@youku.com,true,,\n11,Maria,Simmons,,msimmonsa@seesaa.net,true,United States,scelerisque mauris sit amet eros\n12,Nancy,Robinson,,nrobinsonb@dmoz.org,true,Russia,vestibulum ac\n13,Thomas,Medina,Jr,tmedinac@oracle.com,true,,\n14,Craig,Carter,IV,ccarterd@reddit.com,false,Poland,justo lacinia eget\n15,Joan,Sanders,,jsanderse@imageshack.us,false,Indonesia,in eleifend quam a odio\n16,Amy,Jones,III,ajonesf@free.fr,true,China,ut massa\n17,Kathy,Wood,,kwoodg@angelfire.com,true,Peru,ipsum praesent blandit lacinia\n18,Christopher,Robertson,,crobertsonh@google.com.au,false,Panama,faucibus orci luctus et ultrices\n19,Cheryl,Harvey,,charveyi@indiatimes.com,false,Argentina,proin eu mi nulla ac\n20,Irene,Welch,,iwelchj@wordpress.org,false,Estonia,pede morbi porttitor';
    const expected = 'Active,country,email,First Name,id,Last Name,Notes,Suffix\nfalse,Poland,jwilliamson0@sfgate.com,Judith,1,Williamson,augue vel accumsan tellus,\nfalse,China,pkelly1@reference.com,Paul,2,Kelly,lacus at velit,\nfalse,China,lpayne2@ftc.gov,Lillian,3,Payne,pede libero quis orci,\nfalse,Jamaica,eberry3@qq.com,Eric,4,Berry,odio donec,\nfalse,Democratic Republic of the Congo,mdunn4@studiopress.com,Marie,5,Dunn,metus aenean fermentum donec ut,\ntrue,Philippines,hmontgomery5@fastcompany.com,Helen,6,Montgomery,rutrum ac lobortis vel,Sr\nfalse,Yemen,jkim6@nhs.uk,Jose,7,Kim,nunc viverra,\nfalse,Thailand,cmason7@flickr.com,Carol,8,Mason,tortor sollicitudin mi,\ntrue,Nigeria,asanchez8@google.com.hk,Andrew,9,Sanchez,purus phasellus in felis donec,\ntrue,,bfrazier9@youku.com,Brandon,10,Frazier,,\ntrue,United States,msimmonsa@seesaa.net,Maria,11,Simmons,scelerisque mauris sit amet eros,\ntrue,Russia,nrobinsonb@dmoz.org,Nancy,12,Robinson,vestibulum ac,\ntrue,,tmedinac@oracle.com,Thomas,13,Medina,,Jr\nfalse,Poland,ccarterd@reddit.com,Craig,14,Carter,justo lacinia eget,IV\nfalse,Indonesia,jsanderse@imageshack.us,Joan,15,Sanders,in eleifend quam a odio,\ntrue,China,ajonesf@free.fr,Amy,16,Jones,ut massa,III\ntrue,Peru,kwoodg@angelfire.com,Kathy,17,Wood,ipsum praesent blandit lacinia,\nfalse,Panama,crobertsonh@google.com.au,Christopher,18,Robertson,faucibus orci luctus et ultrices,\nfalse,Argentina,charveyi@indiatimes.com,Cheryl,19,Harvey,proin eu mi nulla ac,\nfalse,Estonia,iwelchj@wordpress.org,Irene,20,Welch,pede morbi porttitor,';

    assert.equal(sortCsvColumns(input), expected)
  });
});
