
context('Actions', () => {

let globUrl="http://localhost:3030";
let categoryName="TVs";
let minPrice=5;
let mxPrice=100;

it('Get and Delete the products with the category as '+categoryName+' and price between '+minPrice+' to '+mxPrice, () => {
cy.log('before test');
cy.request({ method:'GET',
url:globUrl+'/products?category.name='+categoryName+'&price[$gt]='+minPrice+'&price[$lt]='+mxPrice+'&shipping[$eq]=0',
headers:'',
body:''
}).then((response)=>{

expect(response.status).to.equal(200);
let id=response.body.data;

cy.log("Response : "+response);
Cypress.env("totalcount",id.length);
for(let i=0;i<id.length;i++)
{

    Cypress.env('id_'+i,id[i]['id']);
    cy.log("ID : "+id[i]['id']);
    let catID=id[i]['id'];
    //console.log(response);
    cy.request({ method:'DELETE',
    url:globUrl+'/products/'+catID,
    headers:'',
    body:''
    }).then((response)=>{
        expect(response.status).to.equal(200);
    });

}
});
});


it('Try to delete a product that does not exist. Verify that an error is thrown', () => {
    cy.log('Total count :'+Cypress.env("totalcount"));
    for(let j=0;j<Cypress.env("totalcount");j++)
    {
    let tmp_id=Cypress.env('id_'+j);

    cy.request({ method:'DELETE',
    url:globUrl+'/products/'+tmp_id,
    failOnStatusCode: false,
    headers:'',
    body:''
    }).then((response)=>{
        expect(response.status).to.equal(404);
        expect(response.body.name).to.equal('NotFound');
    });

}
});
});
