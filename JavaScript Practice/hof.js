const companies = [
    {
        name: 'comp 1', category: 'fin tech', start: '2018', type: 'startup'
    },
    {
        name: 'comp 2', category: 'fin tech', start: '2022', type: 'mnc'
    },
    {
        name: 'comp 3', category: 'ed tech', start: '2022', type: 'startup'
    },
    {
        name: 'comp 4', category: 'tech', start: '2012', type: 'mnc'
    },
    {
        name: 'comp 5', category: 'saas tech', start: '2013', type: 'startup'
    },
    {
        name: 'comp 6', category: 'fin tech', start: '2018', type: 'midsize'
    }
];

const ages = [12, 24, 10, 45, 56, 63, 45, 67, 87, 32];

// classical For Loops -----------------------
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }


// ForEach -----------------------------------
companies.forEach((company) => {
    console.log(company.name);
});