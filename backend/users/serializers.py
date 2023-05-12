# Rest framework serializer yapısını inherit etmek için yazdık
from rest_framework import serializers
# User tabloma register yapacağım için
from django.contrib.auth.models import User
# Rest framework sağladığı validatorlardan uniquevalidator (restframework dokümanı)
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from dj_rest_auth.serializers import TokenSerializer


class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True,
        # UniqueValidator bir queryset istiyor hangi veriler arasında unique kontrolü yapacağını belirtmek için
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True,
        required=True,
        # burada djangonun kendi validatoru kullanılıyor. base.py AUTH_PASSWORD_VALIDATORS tan bakılabilir. Oldukça detaylı ve güzel
        validators=[validate_password],
        style={"input_type": "password"}
    )

    password2 = serializers.CharField(
        write_only=True,
        required=True,
        # burada djangonun kendi validatoru kullanılıyor. base.py AUTH_PASSWORD_VALIDATORS tan bakılabilir. Oldukça detaylı ve güzel
        validators=[validate_password],
        style={"input_type": "password"}
    )

    class Meta:
        model = User
        # fields= ['username','first_name','last_name','email','password','password2']
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'password2']

        # Rest framework dokümanına gittik. Şu an serilizer yazdığımız için API guide serializers tıkladık. Sonra sol menüde validation tıkladık. Birden fazla field için validation yaptığımızdan object-level validation a bakıyoruz. Tek olsa field level a bakardık.

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(
                {"message": "Password fields should match!"}
            )
        return data

    # User create edilen metod bu. password2 diye bir field normalde yoktu. Onu kaldırmadan datayı gönderirsem hata alırım.
    def create(self, validated_data):
        password = validated_data.get("password")
        validated_data.pop("password2")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "first_name", "last_name", "email")


class CustomTokenSerializer(TokenSerializer):

    user = UserTokenSerializer(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = ("key", "user")
