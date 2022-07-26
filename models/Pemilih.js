module.exports = (sequelize, DataTypes) => {
    const Pemilih = sequelize.define('Pemilih',{
        no_identitas: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.INTEGER,
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
        tableName: 'pemilih',
        timestamps: true,
    });


    Pemilih.associate = (models) => {
        Pemilih.hasMany(models.Pemilihan, {as: 'Pemilih', foreignKey: 'pemilih_id'});
    }

    return Pemilih;
}