module.exports = (sequelize, DataTypes) => {
    const Prodi = sequelize.define('Prodi',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama_prodi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kaprodi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fakultas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    },{
        tableName: 'prodi',
        timestamps: true,
    });

    Prodi.associate = (models) => {
        Prodi.hasMany(models.Peserta, {as: 'Prodi', foreignKey: 'prodi_id'});
    }
    
    return Prodi;
}