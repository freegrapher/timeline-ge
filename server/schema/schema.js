//mongoose models
const Event = require("../models/Event");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQl,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLInt
} = require("graphql");

const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        Country: {type: GraphQLString},
        dateStart: {type: GraphQLInt},
        dateEnd: {type: GraphQLInt},
        image: {type: GraphQLString},
        description: {type: GraphQLString},
    })

});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        events: {
            type: new GraphQLList(EventType),
            args: { 
                name: { type: GraphQLString },
                startDate: { type: GraphQLInt},
                endDate: { type: GraphQLInt},
                Country: {type : GraphQLString},
                
            },
            resolve(parent,args) {
                const filterparameter = {};
                if (typeof args.startDate !== 'undefined') {
                    filterparameter.dateStart={ $gt: args.startDate};
                }
                if (typeof args.endDate !== 'undefined') {
                    filterparameter.dateEnd={ $lt: args.endDate};
                }                           
                return Event.find(filterparameter);

            }
        }
    },
})



module.exports = new GraphQLSchema({
    query: RootQuery
})