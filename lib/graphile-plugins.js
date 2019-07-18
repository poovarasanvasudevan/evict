const {makeExtendSchemaPlugin, gql} = require("graphile-utils");
const si = require('systeminformation');

const SystemPlugin = makeExtendSchemaPlugin(build => {
    const {pgSql: sql, inflection} = build;
    return {
        typeDefs: gql`
        
            type CPU {
                core: Int
                physicalCores: Int
                speed: String
                speedmin: String
                speedmax: String
                brand: String
                manufacturer: String
                cache: CpuCacheData
                family: String
            }
            type SystemInfo {
               cpu : CPU
            }
            
            type CpuCacheData {
                l1d: Int
                l1i: Int
                l2: Int
                l3: Int
            }
            extend type Query {
                systemInfo: SystemInfo
            }
        `,
        resolvers: {
            Query: {
                systemInfo: async () => {
                    var cpu = await si.cpu();
                    return {
                        cpu: {
                            core: cpu.cores,
                            speed: cpu.speed,
                            speedmin: cpu.speedmin,
                            speedmax: cpu.speedmax,
                            brand: cpu.brand,
                            manufacturer: cpu.manufacturer,
                            cache: {
                                l1d: cpu.cache.l1d,
                                l1i: cpu.cache.l1i,
                                l2: cpu.cache.l2,
                                l3: cpu.cache.l3,
                            },
                            physicalCores: cpu.physicalCores,
                            family: cpu.family,
                        }
                    };
                }
            }
        },
    };
});

module.exports = {
    SystemPlugin
};
